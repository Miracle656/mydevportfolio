export interface CountryData {
    value: number;
    color?: string;
}

export interface RegionMarker {
    id: string;
    name: string;
    coordinates: [number, number];
}

export const topCountries = [
    { code: "NG", name: "Nigeria", requests: 24500, color: "#16a34a" }, // Green for Nigeria
    { code: "US", name: "United States", requests: 12400, color: "#2563eb" },
    { code: "GB", name: "United Kingdom", requests: 8500, color: "#ea580c" },
    { code: "DE", name: "Germany", requests: 5200, color: "#f59e0b" },
    { code: "IN", name: "India", requests: 4100, color: "#9333ea" },
    { code: "CA", name: "Canada", requests: 3800, color: "#db2777" },
    { code: "ZA", name: "South Africa", requests: 2900, color: "#dc2626" },
];

// Simplified for portfolio scale
export const countryRequests: Record<string, CountryData> = {
    NG: { value: 24500, color: "#16a34a" },
    US: { value: 12400, color: "#2563eb" },
    GB: { value: 8500, color: "#ea580c" },
    DE: { value: 5200, color: "#f59e0b" },
    IN: { value: 4100, color: "#9333ea" },
    CA: { value: 3800, color: "#db2777" },
    ZA: { value: 2900, color: "#dc2626" },
    // Add others with smaller, random values
    FR: { value: 1200, color: "#475569" },
    BR: { value: 900, color: "#475569" },
    JP: { value: 800, color: "#475569" },
    AU: { value: 750, color: "#475569" },
};

export const regionMarkers: RegionMarker[] = [
    { id: "los1", name: "Lagos", coordinates: [3.3792, 6.5244] },
    { id: "abv1", name: "Abuja", coordinates: [7.3986, 9.0765] },
    { id: "phc1", name: "Port Harcourt", coordinates: [7.0498, 4.8156] },
    { id: "kan1", name: "Kano", coordinates: [8.5167, 12.0022] },
    { id: "ibd1", name: "Ibadan", coordinates: [3.9470, 7.3775] },
];

export const stats = {
    totalRequests: 458369,
    totalDeployments: 142,
    firewallActions: {
        total: 342,
        systemBlocks: 120,
        systemChallenges: 180,
        customWafBlocks: 42,
    },
    botManagement: {
        botsBlocked: 89,
        humansVerified: 24500, // Matches ~Nigeria requests
    },
    cacheHits: 389000,
    isrRevalidations: 15400,
    aiGatewayRequests: 12500,
    uniqueVisitors: 12500,
    successfulAttacks: 0
};

export const formatNumber = (num: number): string => {
    return num.toLocaleString("en-US");
};
