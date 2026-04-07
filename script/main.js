   // Auto-play music without asking
   if (audio && CONFIG.music) {
     audio.play().catch(() => {});
   }
   buildTimeline(rendered);