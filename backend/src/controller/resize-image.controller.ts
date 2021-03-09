import Jimp from 'jimp';

export class ResizeImageController {

  constructor(
    private targetSizeMiniature: number,
    private targetSizeFullImg: number,
  ) {
  }

  async transformImageToMiniature(originImg: Buffer): Promise<Buffer> {
    return this.transformImage(originImg, this.targetSizeMiniature);
  }

  async transformImageToTargetSize(originImg: Buffer): Promise<Buffer> {
    return this.transformImage(originImg, this.targetSizeFullImg);
  }

  private async transformImage(originImg: Buffer, size: number): Promise<Buffer> {
    const image = await Jimp.read(originImg);
    return await image
      .scaleToFit(size, size)
      .getBufferAsync(Jimp.MIME_JPEG);
  }
}
