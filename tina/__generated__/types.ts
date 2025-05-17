export const queries = `
  query Settings($relativePath: String!) {
    settings(relativePath: $relativePath) {
      footer {
        contactAddress
        contactEmail
        hours
        socialLinks {
          platform
          url
        }
        galsscapeDescription
        galsscapeUrl
      }
      home {
        heroTitle
        heroDescription
        services {
          number
          title
          image
        }
      }
    }
  }

  query Journal($relativePath: String!) {
    journal(relativePath: $relativePath) {
      title
      date
      author
      category
      coverImage
      body
    }
  }

  query JournalConnection {
    journalConnection(first: 100) {
      edges {
        node {
          _sys {
            filename
          }
          title
          excerpt
          date
          category
          coverImage
        }
      }
    }
  }

  query Experiment($relativePath: String!) {
    experiment(relativePath: $relativePath) {
      title
      category
      description
      image
      body
    }
  }

  query ExperimentConnection {
    experimentConnection(first: 100) {
      edges {
        node {
          _sys {
            filename
          }
          title
          category
          description
          image
        }
      }
    }
  }
`
