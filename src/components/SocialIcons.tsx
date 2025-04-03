import { Box } from "@mui/material";
import GithubIcon from "../assets/icons/github.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import GmailIcon from "../assets/icons/gmail.svg";

const socialLinks = [
  { href: "https://github.com/josemarin4", icon: GithubIcon, alt: "GitHub" },
  {
    href: "https://www.linkedin.com/in/josem-marin/",
    icon: LinkedinIcon,
    alt: "LinkedIn",
  },
  {
    href: "mailto:josem.marinhernandez@gmail.com",
    icon: GmailIcon,
    alt: "Gmail",
  },
];

type Props = {
  isSmallScreen: boolean;
};

const SocialIcons = ({ isSmallScreen }: Props) => {
  return (
    <Box sx={{ display: "flex", gap: 3.5, mt: 2 }}>
      {socialLinks.map(({ href, icon, alt }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" key={alt}>
          <Box
            sx={{
              width: isSmallScreen ? 45 : 56,
              height: isSmallScreen ? 45 : 56,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "background.paper",
              boxShadow: 1,
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <Box
              component="img"
              src={icon}
              alt={alt}
              sx={{
                width: "65%",
                height: "65%",
                objectFit: "contain",
              }}
            />
          </Box>
        </a>
      ))}
    </Box>
  );
};

export default SocialIcons;
