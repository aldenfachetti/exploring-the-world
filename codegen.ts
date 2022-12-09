import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbcrp1eg13gd01rsgd9j6943/master',
  hooks: { afterAllFileWrite: ['prettier --write'] },
  documents: 'src/graphql/queries.ts',
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        {
          add: {
            content: '/* eslint-disable */'
          }
        }
      ],
      config: {
        namingConvention: { enumValues: 'keep' },
        ignoreEnumValuesFromSchema: true
      }
    }
  }
}

export default config
