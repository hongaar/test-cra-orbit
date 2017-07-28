import { Schema } from "@orbit/data"

const schemaDefinition = {
  models: {
    test: {
      attributes: {
        name: {type: 'string'}
      }
    }
  }
}

const schema = new Schema(schemaDefinition)

export default schema