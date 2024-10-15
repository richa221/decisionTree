export interface TreeActionInterface {
    execute(): void;
}

/**
 * Class Created to send SMS
 */
export class sendSMS implements TreeActionInterface {
    constructor(public phoneNumber: string) { }

    execute(): void {
        console.log(`Sending SMS to ${this.phoneNumber}`);
    }
}
/**
 * Class Created to send email when condition met
 */
export class sendEmailToUser implements TreeActionInterface {
    constructor(public sender: string, public receiver: string) { }

    execute(): void {
        console.log(`Sending email from ${this.sender} to ${this.receiver}`);
    }
}

export class checkCondition implements TreeActionInterface {
    constructor(
        public condition: string,
        public trueAction: TreeActionInterface | null,
        public falseAction: TreeActionInterface | null
    ) { }

    execute(): void {
        const conditionResult = eval(this.condition);
        if (conditionResult) {
            console.log('Condition is true');
            this.trueAction?.execute();
        } else {
            console.log('Condition is false');
            this.falseAction?.execute();
        }
    }
}

export class applyLoop implements TreeActionInterface {
    constructor(public subtree: TreeActionInterface, public iterations: number) { }

    execute(): void {
        for (let i = 0; i < this.iterations; i++) {
            console.log(`Iteration ${i + 1}`);
            this.subtree.execute();
        }
    }
}
