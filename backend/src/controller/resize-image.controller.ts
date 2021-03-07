import Jimp from 'jimp';

export class ResizeImageController {

  constructor(
    private targetSize: number,
  ) {
  }

  async transformImageToMiniature(originImg: Buffer): Promise<Buffer> {
    const image = await Jimp.read(originImg);
    return await image
      .scaleToFit(this.targetSize, this.targetSize)
      .getBufferAsync(Jimp.MIME_JPEG);
  }
}
