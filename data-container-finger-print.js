const workloadFingerprints = [
    {
        name: 'AI Training',
        description: 'Intensive computational tasks for machine learning model development.',
        data: { cpu: 90, memory: 80, io: 60, gpu: 95 },
        color: 'rgba(76, 81, 191, 0.7)',
        borderColor: 'rgba(76, 81, 191, 1)'
    },
    {
        name: 'Data Backup',
        description: 'Transferring and storing large volumes of data, often with high sequential I/O.',
        data: { cpu: 30, memory: 40, io: 90, gpu: 5 },
        color: 'rgba(16, 185, 129, 0.7)',
        borderColor: 'rgba(16, 185, 129, 1)'
    },
    {
        name: 'API Services',
        description: 'Handling numerous small requests, requiring quick response times.',
        data: { cpu: 60, memory: 70, io: 40, gpu: 10 },
        color: 'rgba(245, 158, 11, 0.7)',
        borderColor: 'rgba(245, 158, 11, 1)'
    },
    {
        name: 'Video Rendering',
        description: 'Processing and encoding video files, often CPU and GPU intensive.',
        data: { cpu: 85, memory: 75, io: 50, gpu: 70 },
        color: 'rgba(239, 68, 68, 0.7)',
        borderColor: 'rgba(239, 68, 68, 1)'
    },
    {
        name: 'Database Indexing',
        description: 'Optimizing database performance by building and updating indexes, often I/O and memory intensive.',
        data: { cpu: 50, memory: 65, io: 80, gpu: 5 },
        color: 'rgba(6, 182, 212, 0.7)',
        borderColor: 'rgba(6, 182, 212, 1)'
    }
];
