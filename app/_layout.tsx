import { Slot } from "expo-router";

// This component is acts the same as the children prop in React web applications. Renders the child rout in its place.
export default function RootLayout() {
    return (
        <Slot />
    )
}