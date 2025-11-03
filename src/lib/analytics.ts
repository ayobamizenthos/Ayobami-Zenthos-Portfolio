// Google Analytics utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'; // Replace with your actual GA4 ID

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (page_path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path,
    });
  }
};

export const trackBlogClick = (blogTitle: string, blogId: number) => {
  trackEvent('blog_click', 'engagement', blogTitle, blogId);
};

export const trackNavigationClick = (section: string) => {
  trackEvent('navigation_click', 'navigation', section);
};

export const trackContactForm = (formType: string) => {
  trackEvent('contact_form_submit', 'engagement', formType);
};

export const trackSocialLink = (platform: string) => {
  trackEvent('social_link_click', 'engagement', platform);
};