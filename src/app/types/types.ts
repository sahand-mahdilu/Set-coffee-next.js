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
  interface BodyRequest {
    username: string;
    password: string;
  }
export type { ArticleFooterProps,LoginProps,RegisterProps,BodyRequest}  