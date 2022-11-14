export async function handler(event: string, context: string) {
    console.log('stage from event: ' + process.env.stage);
    return {
        body: 'This better work you bonus neeeeerrrrrd',
        statusCode: 200
    };
}