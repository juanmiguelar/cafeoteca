---
trigger: always_on
---

* Always use TypeScript with strict mode (`"strict": true` in tsconfig.json).
* Define interfaces for all props, state, API responses: `interface User { id: string; name: string; }`.
* Never use `any`—prefer `unknown` + type guards: `if (typeof data === 'string')`.
* Type all hooks: `useUser(id: string): { data: User | null; loading: boolean; }`.
* Utility types: `Partial<User>`, `Omit<User, 'password'>`, `Pick<User, 'id' | 'name'>`.
* Generics for reusable hooks: `useFetch<T>(url: string): { data: T | null; ... }`.
* Event handlers typed: `const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {}`.
* Async functions: `async function fetchUser(id: string): Promise<User>`.
* Components: `interface OrderListProps { userId: string; onDelete: (id: string) => void; }`.
* Example: Replace `props.user?.name` with `const { user } = props as { user: User };`.
* Validate forms with Zod + inferred types: `const schema = z.object({ email: z.string().email() }); type FormData = z.infer<typeof schema>;`.