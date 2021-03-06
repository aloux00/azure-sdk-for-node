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
 * Initializes a new instance of the ExitConditions class.
 * @constructor
 * @summary Specifies how the Batch service should respond when the task
 * completes.
 *
 * @member {array} [exitCodes] A list of individual task exit codes and how the
 * Batch service should respond to them.
 *
 * @member {array} [exitCodeRanges] A list of task exit code ranges and how the
 * Batch service should respond to them.
 *
 * @member {object} [schedulingError] How the Batch service should respond if
 * the task fails with a scheduling error.
 *
 * @member {string} [schedulingError.jobAction] The default is none for exit
 * code 0 and terminate for all other exit conditions. If the job's
 * onTaskFailed property is noAction, then specify this property returns an
 * error. The add task request fails with an invalid property value error;; if
 * you are calling the REST API directly, the HTTP status code is 400 (Bad
 * Request). Possible values include: 'none', 'disable', 'terminate'
 *
 * @member {string} [schedulingError.dependencyAction] The default is 'satisfy'
 * for exit code 0, and 'block' for all other exit conditions. If the job's
 * usesTaskDependencies property is set to false, then specifying the
 * dependencyAction property returns an error. The add task request fails with
 * an invalid property value error; if you are calling the REST API directly,
 * the HTTP status code is 400  (Bad Request). Possible values include:
 * 'satisfy', 'block'
 *
 * @member {object} [default] How the Batch service should respond if the task
 * fails with an exit condition not covered by any of the other properties -
 * that is, any nonzero exit code not listed in the exitCodes or exitCodeRanges
 * collection, or a scheduling error if the schedulingError property is not
 * present. Note that the default condition does not include exit code 0. If
 * you want non-default behaviour on exit code 0, you must list it explicitly
 * using the exitCodes or exitCodeRanges collection.
 *
 * @member {string} [default.jobAction] The default is none for exit code 0 and
 * terminate for all other exit conditions. If the job's onTaskFailed property
 * is noAction, then specify this property returns an error. The add task
 * request fails with an invalid property value error;; if you are calling the
 * REST API directly, the HTTP status code is 400 (Bad Request). Possible
 * values include: 'none', 'disable', 'terminate'
 *
 * @member {string} [default.dependencyAction] The default is 'satisfy' for
 * exit code 0, and 'block' for all other exit conditions. If the job's
 * usesTaskDependencies property is set to false, then specifying the
 * dependencyAction property returns an error. The add task request fails with
 * an invalid property value error; if you are calling the REST API directly,
 * the HTTP status code is 400  (Bad Request). Possible values include:
 * 'satisfy', 'block'
 *
 */
class ExitConditions {
  constructor() {
  }

  /**
   * Defines the metadata of ExitConditions
   *
   * @returns {object} metadata of ExitConditions
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExitConditions',
      type: {
        name: 'Composite',
        className: 'ExitConditions',
        modelProperties: {
          exitCodes: {
            required: false,
            serializedName: 'exitCodes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExitCodeMappingElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExitCodeMapping'
                  }
              }
            }
          },
          exitCodeRanges: {
            required: false,
            serializedName: 'exitCodeRanges',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExitCodeRangeMappingElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExitCodeRangeMapping'
                  }
              }
            }
          },
          schedulingError: {
            required: false,
            serializedName: 'schedulingError',
            type: {
              name: 'Composite',
              className: 'ExitOptions'
            }
          },
          default: {
            required: false,
            serializedName: 'default',
            type: {
              name: 'Composite',
              className: 'ExitOptions'
            }
          }
        }
      }
    };
  }
}

module.exports = ExitConditions;
