/// <reference lib="webworker" />

self.addEventListener('message', (event: MessageEvent) => {
    if (event.data === 'start') {
        setInterval(() => {
            self.postMessage(new Date()); // Gửi thời gian hiện tại về luồng chính
        }, 1000);
    }
});