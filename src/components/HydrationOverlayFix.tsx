if (typeof window !== "undefined") {
  const originalError = console.error;
  
  console.error = (...args) => {
    // Convert all args to string to check for the offending attribute anywhere
    const errorString = args.map(arg => String(arg)).join(' ');

    // Suppress "bis_skin_checked" mismatch warning
    if (errorString.includes("bis_skin_checked")) {
      return;
    }
    
    // Suppress the generic hydration mismatch if it is likely caused by the above
    if (errorString.includes("Hydration failed because the initial UI does not match")) {
      // This is often a follow-up error to the attribute mismatch
      // We can be slightly safer by only suppressing if we suspected an extension issue
      // but usually this specific generic validation error is noisy in dev.
    }

    originalError.apply(console, args);
  };
}

export default function HydrationOverlayFix() {
  return null;
}
