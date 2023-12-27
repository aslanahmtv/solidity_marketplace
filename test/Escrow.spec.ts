import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";
import chai from "chai";
import { Escrow } from "../build/typechain/Escrow";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

chai.use(solidity);
const { expect } = chai;

describe("Escrow", () => {
  let escrow: Escrow;
  let deployer: SignerWithAddress, buyer: SignerWithAddress, seller: SignerWithAddress, support: SignerWithAddress;
  const orderId = ethers.utils.formatBytes32String("order1");
  const amount = ethers.utils.parseEther("1");

  beforeEach(async () => {
    [deployer, buyer, seller, support] = await ethers.getSigners();
    const escrowFactory = await ethers.getContractFactory("Escrow");
    escrow = (await escrowFactory.deploy()) as Escrow;
    await escrow.deployed();
  });

  it("should initiate an order", async () => {
    await expect(
      escrow.connect(buyer).initiateOrder(orderId, seller.address, {
        value: amount,
      })
    )
      .to.emit(escrow, "OrderInitiated")
      .withArgs(orderId, buyer.address, seller.address, amount);
  });

  it("should confirm an order", async () => {
    const c = escrow.connect(buyer)
    await c.initiateOrder(orderId, seller.address, {
      value: amount,
    });
    await expect(c.confirmOrder(orderId))
      .to.emit(escrow, "OrderConfirmed")
      .withArgs(orderId);
  });

  it("should allow cancellation by both buyer and seller with valid signatures", async () => {
    // Initialize order
    await escrow.connect(buyer).initiateOrder(orderId, seller.address, { value: amount });
    // Cancel order by buyer
    const message = "oid";
    const messageHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(message));
    const signature1 = await buyer.signMessage(ethers.utils.arrayify(messageHash));
    const signature2 = await seller.signMessage(ethers.utils.arrayify(messageHash));

    console.log("buyer=%s seller=%s", buyer.address, seller.address)
    await expect(escrow.cancel(orderId, message, [signature1, signature2]))
      .to.emit(escrow, "OrderCancelled")
      .withArgs(orderId);
  });
});

