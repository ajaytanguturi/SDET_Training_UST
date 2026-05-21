export const DASHBOARD_MENUS: Record<string, { label: string; route: string }[]> = {
    OWNER: [
        { label: 'Overview', route: '/dashboard' },
        { label: 'Employees', route: '/employees' },
        { label: 'Approvals', route: '/approvals' },
        { label: 'Billing', route: '/billing' },
    ],
    ADMIN: [
        { label: 'Overview', route: '/dashboard' },
        { label: 'Approvals', route: '/approvals' },
        { label: 'Appointments', route: '/appointments' },
        { label: 'Patients', route: '/patients' },
    ],
    DOCTOR: [
        { label: 'My Appointments', route: '/appointments' },
        { label: 'Patients', route: '/patients' },
        { label: 'Records', route: '/records' },
    ],
    NURSE: [
        { label: 'Patients', route: '/patients' },
        { label: 'Appointments', route: '/appointments' },
    ],
    RECEPTIONIST: [
        { label: 'Appointments', route: '/appointments' },
        { label: 'Patients', route: '/patients' },
        { label: 'Billing', route: '/billing' },
    ],
    CASHIER: [
        { label: 'Billing', route: '/billing' },
        { label: 'Payments', route: '/payments' },
    ],
    LAB_TECH: [
        { label: 'Lab Orders', route: '/lab' },
        { label: 'Patients', route: '/patients' },
    ],
    PHARMACIST: [
        { label: 'Pharmacy', route: '/pharmacy' },
        { label: 'Billing', route: '/billing' },
    ],
};
