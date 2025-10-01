const basePath = import.meta.env.PROD ? '/glow' : '';
const normalizedBasePath = basePath.endsWith('/') && basePath !== '/' ? basePath.slice(0, -1) : basePath;

export function prefixPath(path: string): string {
  if (!path || !path.startsWith('/')) {
    return path;
  }

  if (!normalizedBasePath) {
    return path;
  }

  return `${normalizedBasePath}${path}`;
}
