/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * @member {string} [code]
 *
 * @member {string} [message]
 *
 * @member {string} [target]
 *
 * @member {array} [details]
 *
 */
class ErrorModel {
  constructor() {
  }

  /**
   * Defines the metadata of ErrorModel
   *
   * @returns {object} metadata of ErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Error',
      type: {
        name: 'Composite',
        className: 'ErrorModel',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            serializedName: 'target',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            serializedName: 'details',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorDetailElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorDetail'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorModel;
