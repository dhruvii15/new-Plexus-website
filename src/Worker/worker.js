const worker = self;

worker.onmessage = async function(e) {
    const { type } = e.data;

    try {
        switch (type) {
            case 'FETCH_PORTFOLIO':
                const portfolioResponse = await fetch('https://plexus-technology.in/api/portfolio/read', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!portfolioResponse.ok) {
                    throw new Error('Portfolio fetch failed');
                }

                const portfolioData = await portfolioResponse.json();
                worker.postMessage({
                    type: 'PORTFOLIO_DATA',
                    data: portfolioData.data,
                    status: 'success'
                });
                break;

            case 'FETCH_ADMIN':
                const adminResponse = await fetch('https://plexus-technology.in/api/admin/read', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!adminResponse.ok) {
                    throw new Error('Admin fetch failed');
                }

                const adminData = await adminResponse.json();
                worker.postMessage({
                    type: 'ADMIN_DATA',
                    data: adminData.data[0].hiringStatus,
                    status: 'success'
                });
                break;

            default:
                throw new Error('Unknown request type');
        }
    } catch (error) {
        worker.postMessage({
            type: 'ERROR',
            error: error.message,
            status: 'error'
        });
    }
};

worker.onerror = function(error) {
    worker.postMessage({
        type: 'ERROR',
        error: error.message,
        status: 'error'
    });
};

worker.onunhandledrejection = function(event) {
    worker.postMessage({
        type: 'ERROR',
        error: event.reason,
        status: 'error'
    });
};