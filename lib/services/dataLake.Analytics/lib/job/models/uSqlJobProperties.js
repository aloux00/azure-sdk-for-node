/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the USqlJobProperties class.
 * @constructor
 * @member {array} [resources] Gets or sets the list of resources that are
 * required by the job
 * 
 * @member {object} [statistics] Gets or sets the job specific statistics.
 * 
 * @member {date} [statistics.lastUpdateTimeUtc] Gets the last update time for
 * the statistics.
 * 
 * @member {array} [statistics.stages] Gets the list of stages for the job.
 * 
 * @member {object} [debugData] Gets or sets the job specific debug data
 * locations.
 * 
 * @member {string} [debugData.jobId] Gets the id of the job this data is for.
 * 
 * @member {string} [debugData.command] Gets the command that this job data
 * relates to.
 * 
 * @member {array} [debugData.paths] Gets the list of paths to all of the job
 * data.
 * 
 * @member {string} [algebraFilePath] Gets the U-SQL algebra file path after
 * the job has completed
 * 
 * @member {string} [totalCompilationTime] Gets the total time this job spent
 * compiling. This value should not be set by the user and will be ignored if
 * it is.
 * 
 * @member {string} [totalPauseTime] Gets the total time this job spent
 * paused. This value should not be set by the user and will be ignored if it
 * is.
 * 
 * @member {string} [totalQueuedTime] Gets the total time this job spent
 * queued. This value should not be set by the user and will be ignored if it
 * is.
 * 
 * @member {string} [totalRunningTime] Gets the total time this job spent
 * executing. This value should not be set by the user and will be ignored if
 * it is.
 * 
 * @member {string} [rootProcessNodeId] Gets the ID used to identify the job
 * manager coordinating job execution. This value should not be set by the
 * user and will be ignored if it is.
 * 
 * @member {string} [yarnApplicationId] Gets the ID used to identify the yarn
 * application executing the job. This value should not be set by the user
 * and will be ignored if it is.
 * 
 * @member {number} [yarnApplicationTimeStamp] Gets the timestamp (in ticks)
 * for the yarn application executing the job. This value should not be set
 * by the user and will be ignored if it is.
 * 
 * @member {string} [compileMode] Gets or sets the compile mode for the job.
 * Possible values include: 'Semantic', 'Full', 'SingleBox'
 * 
 */
function USqlJobProperties() {
  USqlJobProperties['super_'].call(this);
}

util.inherits(USqlJobProperties, models['JobProperties']);

/**
 * Defines the metadata of USqlJobProperties
 *
 * @returns {object} metadata of USqlJobProperties
 *
 */
USqlJobProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'USql',
    type: {
      name: 'Composite',
      className: 'USqlJobProperties',
      modelProperties: {
        runtimeVersion: {
          required: false,
          serializedName: 'runtimeVersion',
          type: {
            name: 'String'
          }
        },
        script: {
          required: true,
          serializedName: 'script',
          type: {
            name: 'String'
          }
        },
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        resources: {
          required: false,
          serializedName: 'resources',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'JobResourceElementType',
                type: {
                  name: 'Composite',
                  className: 'JobResource'
                }
            }
          }
        },
        statistics: {
          required: false,
          serializedName: 'statistics',
          type: {
            name: 'Composite',
            className: 'JobStatistics'
          }
        },
        debugData: {
          required: false,
          serializedName: 'debugData',
          type: {
            name: 'Composite',
            className: 'JobDataPath'
          }
        },
        algebraFilePath: {
          required: false,
          serializedName: 'algebraFilePath',
          type: {
            name: 'String'
          }
        },
        totalCompilationTime: {
          required: false,
          serializedName: 'totalCompilationTime',
          type: {
            name: 'String'
          }
        },
        totalPauseTime: {
          required: false,
          serializedName: 'totalPauseTime',
          type: {
            name: 'String'
          }
        },
        totalQueuedTime: {
          required: false,
          serializedName: 'totalQueuedTime',
          type: {
            name: 'String'
          }
        },
        totalRunningTime: {
          required: false,
          serializedName: 'totalRunningTime',
          type: {
            name: 'String'
          }
        },
        rootProcessNodeId: {
          required: false,
          serializedName: 'rootProcessNodeId',
          type: {
            name: 'String'
          }
        },
        yarnApplicationId: {
          required: false,
          serializedName: 'yarnApplicationId',
          type: {
            name: 'String'
          }
        },
        yarnApplicationTimeStamp: {
          required: false,
          serializedName: 'yarnApplicationTimeStamp',
          type: {
            name: 'Number'
          }
        },
        compileMode: {
          required: false,
          serializedName: 'compileMode',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = USqlJobProperties;