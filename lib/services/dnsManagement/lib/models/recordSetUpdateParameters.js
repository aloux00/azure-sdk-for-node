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
 * Initializes a new instance of the RecordSetUpdateParameters class.
 * @constructor
 * Parameters supplied to update a record set.
 *
 * @member {object} [recordSet] Specifies information about the record set
 * being updated.
 *
 * @member {string} [recordSet.id] The ID of the record set.
 *
 * @member {string} [recordSet.name] The name of the record set.
 *
 * @member {string} [recordSet.type] The type of the record set.
 *
 * @member {string} [recordSet.etag] The etag of the record set.
 *
 * @member {object} [recordSet.metadata] The metadata attached to the record
 * set.
 *
 * @member {number} [recordSet.tTL] The TTL (time-to-live) of the records in
 * the record set.
 *
 * @member {array} [recordSet.aRecords] The list of A records in the record
 * set.
 *
 * @member {array} [recordSet.aaaaRecords] The list of AAAA records in the
 * record set.
 *
 * @member {array} [recordSet.mxRecords] The list of MX records in the record
 * set.
 *
 * @member {array} [recordSet.nsRecords] The list of NS records in the record
 * set.
 *
 * @member {array} [recordSet.ptrRecords] The list of PTR records in the record
 * set.
 *
 * @member {array} [recordSet.srvRecords] The list of SRV records in the record
 * set.
 *
 * @member {array} [recordSet.txtRecords] The list of TXT records in the record
 * set.
 *
 * @member {object} [recordSet.cnameRecord] The CNAME record in the  record
 * set.
 *
 * @member {string} [recordSet.cnameRecord.cname] The canonical name for this
 * CNAME record.
 *
 * @member {object} [recordSet.soaRecord] The SOA record in the record set.
 *
 * @member {string} [recordSet.soaRecord.host] The domain name of the
 * authoritative name server for this SOA record.
 *
 * @member {string} [recordSet.soaRecord.email] The email contact for this SOA
 * record.
 *
 * @member {number} [recordSet.soaRecord.serialNumber] The serial number for
 * this SOA record.
 *
 * @member {number} [recordSet.soaRecord.refreshTime] The refresh value for
 * this SOA record.
 *
 * @member {number} [recordSet.soaRecord.retryTime] The retry time for this SOA
 * record.
 *
 * @member {number} [recordSet.soaRecord.expireTime] The expire time for this
 * SOA record.
 *
 * @member {number} [recordSet.soaRecord.minimumTtl] The minimum value for this
 * SOA record. By convention this is used to determine the negative caching
 * duration.
 *
 */
class RecordSetUpdateParameters {
  constructor() {
  }

  /**
   * Defines the metadata of RecordSetUpdateParameters
   *
   * @returns {object} metadata of RecordSetUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecordSetUpdateParameters',
      type: {
        name: 'Composite',
        className: 'RecordSetUpdateParameters',
        modelProperties: {
          recordSet: {
            required: false,
            serializedName: 'RecordSet',
            type: {
              name: 'Composite',
              className: 'RecordSet'
            }
          }
        }
      }
    };
  }
}

module.exports = RecordSetUpdateParameters;