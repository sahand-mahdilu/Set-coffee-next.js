interface ArticleFooterProps {
    title: string;
    img: string;
    comments: string;
    date: string;
    href: string;
   
  }

  interface LoginProps {
    showRegisterForm: () => void;
  }

  interface RegisterProps {
    showLoginForm: () => void;
  }
  
export type { ArticleFooterProps,LoginProps,RegisterProps}  