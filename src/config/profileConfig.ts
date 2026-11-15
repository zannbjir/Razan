import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/demo-avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Razan",
	bio: "If you know me, I know you.",
	links: [
		{
			name: "Telegram",
			icon: "fa7-brands:telegram",
			url: "https://t.me/zannbjir",
		},
		{
			name: "Instagram",
			icon: "fa7-brands:instagram",
			url: "https://www.instagram.com/razanaja.cuy",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/zannbjir",
		},
	],
});
