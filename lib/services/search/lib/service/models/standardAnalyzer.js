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
 * Initializes a new instance of the StandardAnalyzer class.
 * @constructor
 * Standard Apache Lucene analyzer; Composed of the standard tokenizer,
 * lowercase filter and stop filter.
 *
 * @member {number} [maxTokenLength] The maximum token length. Default is 255.
 * Tokens longer than the maximum length are split. The maximum token length
 * that can be used is 300 characters. Default value: 255 .
 *
 * @member {array} [stopwords] A list of stopwords.
 *
 */
class StandardAnalyzer extends models['Analyzer'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StandardAnalyzer
   *
   * @returns {object} metadata of StandardAnalyzer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Azure.Search.StandardAnalyzer',
      type: {
        name: 'Composite',
        className: 'StandardAnalyzer',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            type: {
              name: 'String'
            }
          },
          maxTokenLength: {
            required: false,
            serializedName: 'maxTokenLength',
            defaultValue: 255,
            constraints: {
              InclusiveMaximum: 300
            },
            type: {
              name: 'Number'
            }
          },
          stopwords: {
            required: false,
            serializedName: 'stopwords',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = StandardAnalyzer;