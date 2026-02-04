type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = 'GTM-5HP9V58G';

export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'pageview',
            page: url,
        });
    }
};

export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string;
    category: string;
    label: string;
    value?: number;
}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'gtm_event',
            eventWrapper: {
                category,
                action,
                label,
                value,
            }
        });
    }
};

export const consent = (content: {
    analytics_storage: 'granted' | 'denied';
    ad_storage: 'granted' | 'denied';
}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'consent_update',
            ...content
        });
    }
};
