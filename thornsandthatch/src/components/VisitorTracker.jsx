import { useEffect } from "react";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Prevent multiple counts per session
        const alreadyTracked = sessionStorage.getItem("visitorTracked");
        if (alreadyTracked) return;

        const res = await fetch(`${SERVER_URL}/api/visitors/track-visitor`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
          const data = await res.json();
          console.log(`✅ Visitor tracked. Count: ${data.visitorCount}`);
          sessionStorage.setItem("visitorTracked", "true");
        } else {
          console.error("❌ Failed to track visitor:", res.statusText);
        }
      } catch (err) {
        console.error("❌ Error tracking visit:", err);
      }
    };

    trackVisit();
  }, []);

  return null;
};

export default VisitorTracker;
