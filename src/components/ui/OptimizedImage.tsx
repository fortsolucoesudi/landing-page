interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      className={className}
    />
  );
}
