import * as z from 'zod';

// 定义环境变量
const EnvSchema = z.object({
    // 当前环境
    APP_ENV: z.enum(['pro', 'test', 'dev']),
    // API地址
    API_URL: z.string(),
});

const createEnv = () => {
    const envVars = Object.entries(import.meta.env).reduce<
        Record<string, string>
    >((acc, curr) => {
        const [key, value] = curr;
        if (key.startsWith('VITE_APP_')) {
            acc[key.replace('VITE_APP_', '')] = value;
        }
        return acc;
    }, {});

    const parsedEnv = EnvSchema.safeParse(envVars);

    if (!parsedEnv.success) {
        throw new Error(
            `Invalid env provided.
The following variables are missing or invalid:
${Object.entries(parsedEnv.error.flatten().fieldErrors)
                .map(([k, v]) => `- ${k}: ${v}`)
                .join('\n')}
`
        );
    }

    return parsedEnv.data;
};

export const env = createEnv();
