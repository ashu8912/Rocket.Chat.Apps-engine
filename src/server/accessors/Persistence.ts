import { IPersistence } from '@rocket.chat/apps-ts-definition/accessors';
import { RocketChatAssociationRecord } from '@rocket.chat/apps-ts-definition/metadata';

import { IPersistenceBridge } from '../bridges/IPersistenceBridge';

export class Persistence implements IPersistence {
    constructor(private persistBridge: IPersistenceBridge, private appId: string) { }

    public create(data: any): string {
        return this.persistBridge.create(data, this.appId);
    }

    public createWithAssociation(data: object, association: RocketChatAssociationRecord): string {
        return this.persistBridge.createWithAssociations(data, new Array(association), this.appId);
    }

    public createWithAssociations(data: object, associations: Array<RocketChatAssociationRecord>): string {
        return this.persistBridge.createWithAssociations(data, associations, this.appId);
    }

    public update(id: string, data: object, upsert = false): string {
        return this.persistBridge.update(id, data, upsert, this.appId);
    }

    public remove(id: string): object {
        return this.persistBridge.remove(id, this.appId);
    }

    public removeByAssociation(association: RocketChatAssociationRecord): number {
        return this.persistBridge.removeByAssociations(new Array(association), this.appId);
    }

    public removeByAssociations(associations: Array<RocketChatAssociationRecord>): number {
        return this.persistBridge.removeByAssociations(associations, this.appId);
    }
}