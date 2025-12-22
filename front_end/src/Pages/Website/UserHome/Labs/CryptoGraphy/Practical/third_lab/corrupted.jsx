import { FileDownloader } from '../../../../Components/FileDwnLodrLab/FileDownloader';
export default function Corrupted() {
  return (
    <FileDownloader
      answerText={'Flag{cyber_lab_corrupted_base64_reveal}'}
      fileName={'corrupted.rar'}
      hint={
        'Remember, the base64 string must always be a multiple of 4 characters.'
      }
      labInfo={`We found a strange string of characters while scanning through
                encrypted files, but they appear to be corrupted.<br></br>
                
                
                  <strong>The text reads : </strong>
                  <code class="content__code">R[corrupted]hZ3tjeWJlcl9sYWJfY29ycnVwdGVkX2Jhc2U2NF9yZXZlYWx9
                </code>
                <br></br> 
                Can you make sense of this and uncover what it really means?`}
      subject={'CryptoGraphy'}
      title={'Corrupted'}
    />
  );
}
