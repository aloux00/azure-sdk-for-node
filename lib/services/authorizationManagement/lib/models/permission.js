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

/**
 * @class
 * Initializes a new instance of the Permission class.
 * @constructor
 * Role definition permissions.
 *
 * @member {array} [actions] Allowed actions.
 *
 * @member {array} [notActions] Denied actions.
 *
 */
class Permission {
  constructor() {
  }

  /**
   * Defines the metadata of Permission
   *
   * @returns {object} metadata of Permission
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Permission',
      type: {
        name: 'Composite',
        className: 'Permission',
        modelProperties: {
          actions: {
            required: false,
            serializedName: 'actions',
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
          },
          notActions: {
            required: false,
            serializedName: 'notActions',
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

module.exports = Permission;
