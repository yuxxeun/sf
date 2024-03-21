export interface baseData {
    title: string;
    url: string;
    description: string;
    github: string;
}

const defaultWebsiteData: baseData = {
    title: "SF",
    url: "https://sf.yuxxeun.tech",
    description: "Default description for the website.",
    github: "https://github.com/yuxxeun/sf.git"
};

export default defaultWebsiteData;
