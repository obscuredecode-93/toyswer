import React from 'react';

/* this can be used to defer mounted components in the future. 
We are adding this to our project for convinience. At present we are using it for our formbutton */
export default function defer(Component) {
  const Defer = (props) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    return <Component mounted={mounted} {...props} />;
  };

  return Defer;
}