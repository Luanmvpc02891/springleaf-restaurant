/// <reference lib="webworker" />

addEventListener('message', async ({ data }) => {
    console.log("Call all this User Apis Worker Works", data);
    const domain = 'http://localhost:8080/api';
    if (data === 'start') {
        
    };
});