import ProxySubject from './proxySubject.js';

export function show(): void {
  const proxySubject = new ProxySubject();
  proxySubject.doAction();
}
