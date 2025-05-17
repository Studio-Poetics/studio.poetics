import { defineConfig } from "tinacms"

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main"

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "", // Get this from tina.io
  token: process.env.TINA_TOKEN || "", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // Add this section for GitHub authentication
  auth: {
    useLocalAuth: process.env.NODE_ENV === "development",
    customAuth: true,
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "journal",
        label: "Journal Entries",
        path: "content/journal",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "designedObject",
        label: "Designed Objects",
        path: "content/designed-objects",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Short Description",
          },
          {
            type: "string",
            name: "longDescription",
            label: "Long Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "year",
            label: "Year",
          },
          {
            type: "image",
            name: "images",
            label: "Images",
            list: true,
          },
          {
            type: "string",
            name: "details",
            label: "Details",
            list: true,
          },
          {
            type: "string",
            name: "relatedProducts",
            label: "Related Products",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "experiment",
        label: "Experiments",
        path: "content/experiments",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "settings",
        label: "Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              {
                type: "string",
                name: "contactAddress",
                label: "Contact Address",
              },
              {
                type: "string",
                name: "contactEmail",
                label: "Contact Email",
              },
              {
                type: "string",
                name: "hours",
                label: "Hours",
              },
              {
                type: "object",
                name: "socialLinks",
                label: "Social Links",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "platform",
                    label: "Platform",
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL",
                  },
                ],
              },
              {
                type: "string",
                name: "galsscapeDescription",
                label: "Galsscape Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "galsscapeUrl",
                label: "Galsscape URL",
              },
            ],
          },
          {
            type: "object",
            name: "home",
            label: "Home Page",
            fields: [
              {
                type: "string",
                name: "heroTitle",
                label: "Hero Title",
              },
              {
                type: "string",
                name: "heroDescription",
                label: "Hero Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "services",
                label: "Services",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "number",
                    label: "Number",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
})
