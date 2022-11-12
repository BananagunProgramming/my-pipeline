export async function handler(event: string, context: string) {
    console.log('stage from event: ' + process.env.stage);
    return {
        body: 'This better work nerd',
        statusCode: 200
    };
}