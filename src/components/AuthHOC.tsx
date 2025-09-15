import React from 'react'

type authProps = {
    isLoggedIn: boolean
}

function withAuth<P extends object>(WrappedComponent:React.ComponentType<P>){
    return (props: P & authProps) => {
        const { isLoggedIn, ...otherProps } = props;
        if(!isLoggedIn){
            return <p>Please login to view the content</p>
        }
        return <WrappedComponent {...(otherProps as P)} />;
    }
}

// Original component
const SecretComponent: React.FC = () => <h1>Secret Content....</h1>

// Wrapped component
const ProtectedSecret = withAuth(SecretComponent);

export default function AuthHOC(){
    return <ProtectedSecret isLoggedIn={false}/>
}

/*

A Higher-Order Component is a function that takes a component and returns a new component with added functionality.
Think of it as wrapping your component to enhance it, without modifying the original component.

	•	P extends object → ensures the wrapped component can accept any props.
	•	props: P & authProps → the HOC adds extra props (isLoggedIn) while keeping the original props.
	•	rest as P → strips HOC-specific props before passing to wrapped component.
*/