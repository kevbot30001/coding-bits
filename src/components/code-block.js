import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from 'prism-react-renderer/themes/vsDark';

import * as S from "./code-block.styles";

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta) => {
    if (!RE.test(meta)) {
        return () => false
    } else {
        const lineNumbers = RE.exec(meta)[1]
            .split(',')
            .map((v) => v.split('-').map((v) => parseInt(v, 10)))
        return (index) => {
            const lineNumber = index + 1
            const inRange = lineNumbers.some(([start, end]) =>
                end ? lineNumber >= start && lineNumber <= end : lineNumber === start
            )
            return inRange;
        }
    }
}

const CodeBlock = ({ children, className, metastring }) => {
    const shouldHighlightLine = calculateLinesToHighlight(metastring);
    const language = className.replace(/language-/, '') || "";
    return (
        <Highlight {...defaultProps} code={children.trim()} language={language} theme={vsDark}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <S.Wrapper className={className} >
                    <S.Pre style={style}>
                        {tokens.map((line, i) => {
                            let highlightClass = "";
                            if (shouldHighlightLine(i)) {
                                highlightClass = `highlight-line`;
                            }
                            return (
                                <S.Line key={i} {...getLineProps({ line, key: i })}>
                                    <S.LineNo>{i + 1}</S.LineNo>
                                    <S.LineContent className={highlightClass}>
                                        {line.map((token, key) => (
                                            <span key={key} {...getTokenProps({ token, key })} />
                                        ))}
                                    </S.LineContent>
                                </S.Line>
                            )
                        })}
                    </S.Pre>
                </S.Wrapper>
            )}
        </Highlight>
    );
};

export default CodeBlock;