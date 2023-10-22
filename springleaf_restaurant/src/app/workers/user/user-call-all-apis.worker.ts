/// <reference lib="webworker" />

addEventListener('message', async ( event ) => {
    const { type, loginData } = event.data;
    console.log("Call all this User Apis Worker Works", type );
    const domain = 'http://localhost:8080/api';
    if (type === 'login') {
        const { username, password } = loginData;
        try {
            const responses = await Promise.all([
                fetch(`${domain}/v1/auth/authenticate`, {
                    method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
                }),
            ]);

            const responseData = await Promise.all(responses.map(async (response) => {
                if (response.ok) {
                    return await response.json();
                } else {
                    return null;
                }
            }));

            const dataMap = {
                loginResponse : responseData[0],
            }
            postMessage(dataMap);
            
        }catch {

        }
    };
});