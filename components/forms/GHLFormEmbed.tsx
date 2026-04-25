"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { pushEvent } from "@/lib/analytics";

interface GHLFormEmbedProps {
  formId: string;
  formTitle?: string;
  formHeight?: number;
  className?: string;
}

const GHL_EMBED_HOST = "https://link.msgsndr.com";
const GHL_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

export default function GHLFormEmbed({
  formId,
  formTitle = "Lead Capture Form",
  formHeight = 700,
  className = "",
}: GHLFormEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (typeof event.data !== "object" || event.data === null) return;
      const data = event.data as { type?: string; formId?: string };
      if (data.type === "form_submitted" || data.type === "hsFormCallback") {
        pushEvent("ghl_form_submit", { formId: data.formId ?? formId });
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [formId]);

  return (
    <div className={className}>
      <iframe
        ref={iframeRef}
        src={`${GHL_EMBED_HOST}/widget/form/${formId}`}
        title={formTitle}
        id={`inline-${formId}`}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name={formTitle}
        data-height={formHeight}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        style={{
          width: "100%",
          height: `${formHeight}px`,
          border: "none",
          borderRadius: "0.5rem",
        }}
      />
      <Script src={GHL_EMBED_SCRIPT} strategy="lazyOnload" />
    </div>
  );
}
