import { TreeActionInterface, sendSMS, sendEmailToUser, checkCondition, applyLoop } from '../models/treeModel';
/**
 * Created service class to caculate the condition and loop
 */
export class DecisionTreeService {
    constructor(private rootAction: TreeActionInterface) { }

    execute(): void {
        this.rootAction.execute();
    }

    static fromJSON(json: any): DecisionTreeService {
        const rootAction = this.createAction(json);
        return new DecisionTreeService(rootAction);
    }

    static createAction(json: any): TreeActionInterface {
        // Type which is being sent from the input depending on the type operation will be performed
        switch (json.type) {
            case 'sendSMS':
                return new sendSMS(json.phoneNumber);
            case 'sendEmail':
                return new sendEmailToUser(json.sender, json.receiver);
            case 'Condition':
                const trueAction = json.trueAction ? this.createAction(json.trueAction) : null;
                const falseAction = json.falseAction ? this.createAction(json.falseAction) : null;
                return new checkCondition(json.condition, trueAction, falseAction);
            case 'Loop':
                const subtree = this.createAction(json.subtree);
                return new applyLoop(subtree, json.iterations);
            default:
                throw new Error(`Please provide input action anyone of these(sendSMS, SendEmail, Condition, Loop): ${json.type}`);
        }
    }

    toJSON(): any {
        return this.serializeAction(this.rootAction);
    }

    private serializeAction(action: TreeActionInterface): any {
        if (action instanceof sendSMS) {
            return { type: 'sendSMS', phoneNumber: action.phoneNumber };
        } else if (action instanceof sendEmailToUser) {
            return { type: 'SendEmail', sender: action.sender, receiver: action.receiver };
        } else if (action instanceof checkCondition) {
            return {
                type: 'Condition',
                condition: action.condition,
                trueAction: action.trueAction ? this.serializeAction(action.trueAction) : null,
                falseAction: action.falseAction ? this.serializeAction(action.falseAction) : null
            };
        } else if (action instanceof applyLoop) {
            return {
                type: 'Loop',
                iterations: action.iterations,
                subtree: this.serializeAction(action.subtree)
            };
        }
    }
}
