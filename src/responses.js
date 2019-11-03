import defaults from './defaults'

class Good {
  constructor(data = null, message, status) {
    this.data = data
    this.message = message
    this.status = status

    return this
  }
}

class Bad extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
  }
}

export default {
  defaults: defaults,
  Found: class Found extends Good {
    constructor(data, message = defaults.Found.message) {
      super(data, message, defaults.Found.status)
    }
  },
  Created: class Created extends Good {
    constructor(data, message = defaults.Created.message) {
      super(data, message, defaults.Created.status)
    }
  },
  Updated: class Updated extends Good {
    constructor(data, message = defaults.Updated.message) {
      super(data, message, defaults.Updated.status)
    }
  },
  Deleted: class Deleted extends Good {
    constructor(message = defaults.Deleted.message) {
      super(null, message, defaults.Deleted.status)
    }
  },
  NotFound: class NotFound extends Bad {
    constructor(message = defaults.NotFound.message) {
      super(message, defaults.NotFound.status)
    }
  },
  BadRequest: class BadRequest extends Bad {
    constructor(message = defaults.BadRequest.message) {
      super(message, defaults.BadRequest.status)
    }
  },
  Forbidden: class Forbidden extends Bad {
    constructor(message = defaults.Forbidden.message) {
      super(message, defaults.Forbidden.status)
    }
  },
  Unauthorized: class Unauthorized extends Bad {
    constructor(message = defaults.Unauthorized.message) {
      super(message, defaults.Unauthorized.status)
    }
  },
  InternalServerError: class InternalServerError extends Bad {
    constructor(message = defaults.InternalServerError.message) {
      super(message, defaults.InternalServerError.status)
    }
  },
  NoContent: class NoContent extends Bad {
    constructor() {
      super(message = defaults.NoContent.message, defaults.NoContent.status)
    }
  }
}
