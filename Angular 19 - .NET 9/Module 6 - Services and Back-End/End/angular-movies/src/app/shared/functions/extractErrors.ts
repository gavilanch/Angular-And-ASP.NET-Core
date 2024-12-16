export function extractErrors(obj: any): string[]{
    const err = obj.error.errors;
    let errorMessages: string[] = [];

    for(let key in err){
        let field = key;
        const messagesWithField = err[key].map((errorMessage: string) => `${field}: ${errorMessage}`);
        errorMessages.push(messagesWithField);
    }

    return errorMessages;
}