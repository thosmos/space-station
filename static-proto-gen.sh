
#!/bin/bash
# path to the gravity bridge repo on your machine, this script must be run from inside the space-station repo at the top level
GRAVITY_REPO_PATH=/Users/chalabi/Code/Cosmos/Gravity-Bridge/module
# you will need to run npm install -g protobufjs-cli 

# Generate a single monolotic file with all these protobufs 
pbjs -t static-module -w commonjs -o src/constants/proto.js \
  node_modules/protobufjs/google/protobuf/*.proto \
  $GRAVITY_REPO_PATH/proto/gravity/v1/*.proto \
  $GRAVITY_REPO_PATH/third_party/proto/cosmos/bank/v1beta1/*.proto \
  $GRAVITY_REPO_PATH/third_party/proto/cosmos/base/v1beta1/*.proto \
  $GRAVITY_REPO_PATH/third_party/proto/cosmos/base/abci/v1beta1/*.proto \
  $GRAVITY_REPO_PATH/third_party/proto/cosmos/base/query/v1beta1/*.proto \
  $GRAVITY_REPO_PATH/third_party/proto/cosmos/upgrade/v1beta1/*.proto \
  $GRAVITY_REPO_PATH/third_party/proto/google/protobuf/*.proto \
  $GRAVITY_REPO_PATH/third_party/proto/gogoproto/*.proto \
  $GRAVITY_REPO_PATH/third_party/proto/ibc/applications/transfer/v1/*.proto \
  $GRAVITY_REPO_PATH/third_party/proto/ibc/core/**/v1/*.proto \
  $GRAVITY_REPO_PATH/third_party/proto/*.proto \
  $GRAVITY_REPO_PATH/third_party/proto/tendermint/**/*.proto \
  $GRAVITY_REPO_PATH/third_party/proto/tendermint/libs/bits/*.proto \

# compile typescript definitions for above monolithic file
pbts -o src/constants/proto.d.ts src/constants/proto.js
