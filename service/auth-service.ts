export async function login(): Promise<boolean> {
  return await new Promise(r => setTimeout(() => r(true), 500));
}
