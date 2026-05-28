import Script from "next/script";

const GHL_CHAT_WIDGET_ID = "674f4b44f9c66bff51f57f57";

export function GhlChatWidget() {
  return (
    <Script
      id="ghl-chat-widget"
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={GHL_CHAT_WIDGET_ID}
      strategy="afterInteractive"
    />
  );
}
