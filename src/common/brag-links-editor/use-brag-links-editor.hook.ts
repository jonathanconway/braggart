import { useState } from "react";

interface State {
  readonly links: readonly string[];
  readonly addLinkValue: string;
}

export function useBragLinksEditor(props: {
  readonly links: readonly string[];
}) {
  const initial = {
    links: props.links,
    addLinkValue: "",
  };

  const [state, setState] = useState<State>(initial);

  const { links, addLinkValue } = state;

  const addLinkDisabled = addLinkValue.trim() === "";

  function addLink() {
    setState({
      ...state,
      links: [...state.links, addLinkValue],
      addLinkValue: "",
    });
  }

  function setAddLinkValue(addLinkValue: string) {
    setState({
      ...state,
      addLinkValue,
    });
  }

  function deleteLink(linkValue: string) {
    return () =>
      setState({
        ...state,
        links: state.links.filter((link) => link !== linkValue),
      });
  }

  return {
    links,
    addLinkValue,
    addLinkDisabled,
    setAddLinkValue,
    addLink,
    deleteLink,
  };
}
