/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ApiType =
  | "evm"
  | "tendermint-rpc"
  | "cosmos-http"
  | "tendermint-ws"
  | "cosmos-grpc"
  | "evm-ws"
  | "blockcypher"
  | "esplora";

export interface NetworksSchema {
  /**
   * This interface was referenced by `NetworksSchema`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   */
  [k: string]: {
    chain_id: number;
    chain_name: string;
    bech32_prefix?: string;
    fees?: {
      assets?: {
        denom: string;
        gas: number;
        gas_price: number;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    assets?: {
      denoms: {
        denom: string;
        exponent: number;
        [k: string]: unknown;
      }[];
      base: string;
      symbol: string;
      [k: string]: unknown;
    }[];
    apps?: {
      type: string;
      url: string;
      tx: string;
      address: string;
      [k: string]: unknown;
    }[];
    staking?: {
      denom?: string;
      [k: string]: unknown;
    };
    api?: Api[];
    [k: string]: unknown;
  };
}
export interface Api {
  url: string;
  type: ApiType;
  [k: string]: unknown;
}
