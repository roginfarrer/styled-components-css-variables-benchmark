import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { renderToString as render } from 'react-dom/server';
import './index.css';

const LOOP = 2000;

const theme = {
  colors: {
    blue40: 'teal',
    red40: 'orange',
  },
};

const AppThemeProvider = (props) => {
  return <ThemeProvider theme={theme} {...props} />;
};

/**
 * SETUP: STYLED COMPONENTS - VANILLA
 */
const ScBaseComponent = styled.h1({
  padding: '5rem',
  color: ({ theme }) => theme?.colors?.blue40,
});

const ScOverrideBaseComponent = styled(ScBaseComponent)({
  color: ({ theme }) => theme?.colors?.red40,
  paddingTop: '5rem',
});

const ScDynamicComponent = styled.div((props) => ({
  opacity: props.disabled ? 0.5 : 1,
  color: ({ theme }) => theme?.colors?.red40,
}));

const ScTest3 = () => {
  return (
    <AppThemeProvider>
      <ScBaseComponent>Hello Test</ScBaseComponent>
    </AppThemeProvider>
  );
};

const ScTest1 = () => {
  return (
    <AppThemeProvider>
      <ScOverrideBaseComponent>Hello Test</ScOverrideBaseComponent>
    </AppThemeProvider>
  );
};

const ScTest2 = () => {
  return (
    <AppThemeProvider>
      <div>
        <ScDynamicComponent disabled>Hello Test</ScDynamicComponent>
        <ScDynamicComponent disabled={false}>Hello Test</ScDynamicComponent>
      </div>
    </AppThemeProvider>
  );
};

const ScTest4 = () => {
  return (
    <AppThemeProvider>
      <ScDynamicComponent>
        <ScDynamicComponent>
          <ScDynamicComponent>
            <ScDynamicComponent>
              <ScDynamicComponent>
                <ScDynamicComponent>
                  <ScDynamicComponent>
                    <ScDynamicComponent>
                      <ScDynamicComponent>
                        <ScDynamicComponent>
                          <ScDynamicComponent>
                            <ScDynamicComponent>
                              <ScDynamicComponent>
                                <ScDynamicComponent>
                                  <ScDynamicComponent>
                                    <ScDynamicComponent>
                                      <ScDynamicComponent>
                                        <ScDynamicComponent>
                                          <ScDynamicComponent>
                                            <ScDynamicComponent>
                                              <ScDynamicComponent>
                                                <ScDynamicComponent>
                                                  <ScDynamicComponent>
                                                    <ScDynamicComponent>
                                                      <ScDynamicComponent>
                                                        <ScDynamicComponent>
                                                          <ScDynamicComponent>
                                                            <ScDynamicComponent>
                                                              <ScDynamicComponent>
                                                                <ScDynamicComponent>
                                                                  <ScDynamicComponent>
                                                                    <ScDynamicComponent>
                                                                      <ScDynamicComponent>
                                                                        <ScDynamicComponent>
                                                                          <ScDynamicComponent>
                                                                            <ScDynamicComponent>
                                                                              <ScDynamicComponent>
                                                                                <ScDynamicComponent>
                                                                                  <ScDynamicComponent>
                                                                                    <ScDynamicComponent>
                                                                                      <ScDynamicComponent>
                                                                                        <ScDynamicComponent>
                                                                                          <ScDynamicComponent />
                                                                                        </ScDynamicComponent>
                                                                                      </ScDynamicComponent>
                                                                                    </ScDynamicComponent>
                                                                                  </ScDynamicComponent>
                                                                                </ScDynamicComponent>
                                                                              </ScDynamicComponent>
                                                                            </ScDynamicComponent>
                                                                          </ScDynamicComponent>
                                                                        </ScDynamicComponent>
                                                                      </ScDynamicComponent>
                                                                    </ScDynamicComponent>
                                                                  </ScDynamicComponent>
                                                                </ScDynamicComponent>
                                                              </ScDynamicComponent>
                                                            </ScDynamicComponent>
                                                          </ScDynamicComponent>
                                                        </ScDynamicComponent>
                                                      </ScDynamicComponent>
                                                    </ScDynamicComponent>
                                                  </ScDynamicComponent>
                                                </ScDynamicComponent>
                                              </ScDynamicComponent>
                                            </ScDynamicComponent>
                                          </ScDynamicComponent>
                                        </ScDynamicComponent>
                                      </ScDynamicComponent>
                                    </ScDynamicComponent>
                                  </ScDynamicComponent>
                                </ScDynamicComponent>
                              </ScDynamicComponent>
                            </ScDynamicComponent>
                          </ScDynamicComponent>
                        </ScDynamicComponent>
                      </ScDynamicComponent>
                    </ScDynamicComponent>
                  </ScDynamicComponent>
                </ScDynamicComponent>
              </ScDynamicComponent>
            </ScDynamicComponent>
          </ScDynamicComponent>
        </ScDynamicComponent>
      </ScDynamicComponent>
    </AppThemeProvider>
  );
};

/**
 * SETUP: STYLED COMPONENTS - CSS Variables
 */
const VarsBaseComponent = styled.h1({
  padding: '5rem',
  color: 'var(--color-blue40)',
});

const VarsOverrideBaseComponent = styled(ScBaseComponent)({
  color: 'var(--color-red40)',
  paddingTop: '5rem',
});

const VarsDynamicComponent = styled.div((props) => ({
  opacity: props.disabled ? 0.5 : 1,
  color: 'var(--color-red40)',
}));

const VarsTest3 = () => {
  return (
    <AppThemeProvider>
      <VarsBaseComponent>Hello Test</VarsBaseComponent>
    </AppThemeProvider>
  );
};

const VarsTest1 = () => {
  return (
    <AppThemeProvider>
      <VarsOverrideBaseComponent>Hello Test</VarsOverrideBaseComponent>
    </AppThemeProvider>
  );
};

const VarsTest2 = () => {
  return (
    <AppThemeProvider>
      <div>
        <VarsDynamicComponent variant="muted">Hello Test</VarsDynamicComponent>
        <VarsDynamicComponent>Hello Test</VarsDynamicComponent>
      </div>
    </AppThemeProvider>
  );
};

const VarsTest4 = () => {
  return (
    <AppThemeProvider>
      <VarsDynamicComponent>
        <VarsDynamicComponent>
          <VarsDynamicComponent>
            <VarsDynamicComponent>
              <VarsDynamicComponent>
                <VarsDynamicComponent>
                  <VarsDynamicComponent>
                    <VarsDynamicComponent>
                      <VarsDynamicComponent>
                        <VarsDynamicComponent>
                          <VarsDynamicComponent>
                            <VarsDynamicComponent>
                              <VarsDynamicComponent>
                                <VarsDynamicComponent>
                                  <VarsDynamicComponent>
                                    <VarsDynamicComponent>
                                      <VarsDynamicComponent>
                                        <VarsDynamicComponent>
                                          <VarsDynamicComponent>
                                            <VarsDynamicComponent>
                                              <VarsDynamicComponent>
                                                <VarsDynamicComponent>
                                                  <VarsDynamicComponent>
                                                    <VarsDynamicComponent>
                                                      <VarsDynamicComponent>
                                                        <VarsDynamicComponent>
                                                          <VarsDynamicComponent>
                                                            <VarsDynamicComponent>
                                                              <VarsDynamicComponent>
                                                                <VarsDynamicComponent>
                                                                  <VarsDynamicComponent>
                                                                    <VarsDynamicComponent>
                                                                      <VarsDynamicComponent>
                                                                        <VarsDynamicComponent>
                                                                          <VarsDynamicComponent>
                                                                            <VarsDynamicComponent>
                                                                              <VarsDynamicComponent>
                                                                                <VarsDynamicComponent>
                                                                                  <VarsDynamicComponent>
                                                                                    <VarsDynamicComponent>
                                                                                      <VarsDynamicComponent>
                                                                                        <VarsDynamicComponent>
                                                                                          <VarsDynamicComponent />
                                                                                        </VarsDynamicComponent>
                                                                                      </VarsDynamicComponent>
                                                                                    </VarsDynamicComponent>
                                                                                  </VarsDynamicComponent>
                                                                                </VarsDynamicComponent>
                                                                              </VarsDynamicComponent>
                                                                            </VarsDynamicComponent>
                                                                          </VarsDynamicComponent>
                                                                        </VarsDynamicComponent>
                                                                      </VarsDynamicComponent>
                                                                    </VarsDynamicComponent>
                                                                  </VarsDynamicComponent>
                                                                </VarsDynamicComponent>
                                                              </VarsDynamicComponent>
                                                            </VarsDynamicComponent>
                                                          </VarsDynamicComponent>
                                                        </VarsDynamicComponent>
                                                      </VarsDynamicComponent>
                                                    </VarsDynamicComponent>
                                                  </VarsDynamicComponent>
                                                </VarsDynamicComponent>
                                              </VarsDynamicComponent>
                                            </VarsDynamicComponent>
                                          </VarsDynamicComponent>
                                        </VarsDynamicComponent>
                                      </VarsDynamicComponent>
                                    </VarsDynamicComponent>
                                  </VarsDynamicComponent>
                                </VarsDynamicComponent>
                              </VarsDynamicComponent>
                            </VarsDynamicComponent>
                          </VarsDynamicComponent>
                        </VarsDynamicComponent>
                      </VarsDynamicComponent>
                    </VarsDynamicComponent>
                  </VarsDynamicComponent>
                </VarsDynamicComponent>
              </VarsDynamicComponent>
            </VarsDynamicComponent>
          </VarsDynamicComponent>
        </VarsDynamicComponent>
      </VarsDynamicComponent>
    </AppThemeProvider>
  );
};

let start;

/**
 * RUN: STYLED-COMPONENTS
 */
start = performance.now();
for (let x = 0; x < LOOP; x++) {
  styled.div({
    color: ({ theme }) => theme.colors.blue[40],
  });
}
const ScDefineThemed = performance.now() - start;

start = performance.now();
for (let x = 0; x < LOOP; x++) {
  render(<ScTest3 />);
}
const ScConsumeBase = performance.now() - start;

start = performance.now();
for (let x = 0; x < LOOP; x++) {
  render(<ScTest1 />);
}
const ScConsumeOveridden = performance.now() - start;

start = performance.now();
for (let x = 0; x < LOOP; x++) {
  render(<ScTest2 />);
}
const ScConsumeDynamic = performance.now() - start;

start = performance.now();
for (let x = 0; x < LOOP; x++) {
  render(<ScTest4 />);
}
const ScConsumeDeepTree = performance.now() - start;

/**
 * RUN: STYLED COMPONENTS - CSS VARIABLES
 */
start = performance.now();
for (let x = 0; x < LOOP; x++) {
  styled.div({
    padding: 'var(--colors-blue40)',
  });
}
const VarsDefineThemed = performance.now() - start;

start = performance.now();
for (let x = 0; x < LOOP; x++) {
  render(<VarsTest3 />);
}
const VarsConsumeBase = performance.now() - start;

start = performance.now();
for (let x = 0; x < LOOP; x++) {
  render(<VarsTest1 />);
}
const VarsConsumeOveridden = performance.now() - start;

start = performance.now();
for (let x = 0; x < LOOP; x++) {
  render(<VarsTest2 />);
}
const VarsConsumeDynamic = performance.now() - start;

start = performance.now();
for (let x = 0; x < LOOP; x++) {
  render(<VarsTest4 />);
}
const VarsConsumeDeepTree = performance.now() - start;

console.table({
  'STYLED-COMPONENTS': {
    'define themed': ScDefineThemed,
    'render themed': ScConsumeBase,
    'render overidden': ScConsumeOveridden,
    'render dynamic props': ScConsumeDynamic,
    'deeply nested tree': ScConsumeDeepTree,
  },
  'STYLED-COMPONENTS + CSS VARS': {
    'define themed': VarsDefineThemed,
    'render themed': VarsConsumeBase,
    'render overidden': VarsConsumeOveridden,
    'render dynamic props': VarsConsumeDynamic,
    'deeply nested tree': VarsConsumeDeepTree,
  },
  Compare: {
    'define themed': Math.floor((ScDefineThemed / VarsDefineThemed) * 100) / 100 + 'x',
    'render themed': Math.floor((ScConsumeBase / VarsConsumeBase) * 100) / 100 + 'x',
    'render overidden': Math.floor((ScConsumeOveridden / VarsConsumeOveridden) * 100) / 100 + 'x',
    'render dynamic props': Math.floor((ScConsumeDynamic / VarsConsumeDynamic) * 100) / 100 + 'x',
    'deeply nested tree': Math.floor((ScConsumeDeepTree / VarsConsumeDeepTree) * 100) / 100 + 'x',
  },
});
